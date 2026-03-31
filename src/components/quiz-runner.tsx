"use client";

import { useEffect, useMemo, useState } from "react";

import type { Quiz } from "@/lib/types";

type QuizRunnerProps = {
  quiz: Quiz;
};

type StoredAnswers = Record<string, number>;

function getStoredQuizState(storageKey: string) {
  if (typeof window === "undefined") {
    return {
      answers: {} as StoredAnswers,
      submitted: false,
    };
  }

  const raw = window.localStorage.getItem(storageKey);

  if (!raw) {
    return {
      answers: {} as StoredAnswers,
      submitted: false,
    };
  }

  try {
    const parsed = JSON.parse(raw) as {
      answers?: StoredAnswers;
      submitted?: boolean;
    };

    return {
      answers: parsed.answers ?? {},
      submitted: Boolean(parsed.submitted),
    };
  } catch {
    window.localStorage.removeItem(storageKey);
    return {
      answers: {} as StoredAnswers,
      submitted: false,
    };
  }
}

export function QuizRunner({ quiz }: QuizRunnerProps) {
  const storageKey = `quiz:${quiz.slug}`;
  const initialState = getStoredQuizState(storageKey);
  const [answers, setAnswers] = useState<StoredAnswers>(initialState.answers);
  const [submitted, setSubmitted] = useState(initialState.submitted);

  useEffect(() => {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({ answers, submitted })
    );
  }, [answers, storageKey, submitted]);

  const score = useMemo(() => {
    return quiz.questions.reduce((total, question) => {
      return total + (answers[question.id] === question.correctIndex ? 1 : 0);
    }, 0);
  }, [answers, quiz.questions]);

  function selectAnswer(questionId: string, choiceIndex: number) {
    if (submitted) {
      return;
    }

    setAnswers((current) => ({
      ...current,
      [questionId]: choiceIndex,
    }));
  }

  function resetQuiz() {
    setAnswers({});
    setSubmitted(false);
    window.localStorage.removeItem(storageKey);
  }

  return (
    <section className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
        <p className="text-sm leading-7 text-slate-300">{quiz.summary}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
            {quiz.questions.length} pertanyaan
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
            Progress tersimpan lokal
          </span>
        </div>
      </div>

      {quiz.questions.map((question, index) => {
        const selected = answers[question.id];

        return (
          <article
            key={question.id}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
          >
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-200 uppercase">
              Pertanyaan {index + 1}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              {question.prompt}
            </h2>

            <div className="mt-5 space-y-3">
              {question.choices.map((choice, choiceIndex) => {
                const isSelected = selected === choiceIndex;
                const isCorrect = question.correctIndex === choiceIndex;

                let className =
                  "w-full rounded-[1.4rem] border px-4 py-4 text-left text-sm leading-7 transition ";

                if (!submitted) {
                  className += isSelected
                    ? "border-amber-300/40 bg-amber-300/10 text-white"
                    : "border-white/10 bg-slate-950/70 text-slate-300 hover:border-white/20 hover:bg-white/[0.06]";
                } else if (isCorrect) {
                  className +=
                    "border-emerald-300/40 bg-emerald-300/10 text-emerald-50";
                } else if (isSelected) {
                  className += "border-rose-300/40 bg-rose-300/10 text-rose-50";
                } else {
                  className += "border-white/10 bg-slate-950/70 text-slate-400";
                }

                return (
                  <button
                    key={choice}
                    type="button"
                    className={className}
                    onClick={() => selectAnswer(question.id, choiceIndex)}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>

            {submitted ? (
              <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-4 text-sm leading-7 text-slate-300">
                <p className="font-medium text-white">Pembahasan</p>
                <p className="mt-2">{question.explanation}</p>
              </div>
            ) : null}
          </article>
        );
      })}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          disabled={submitted || Object.keys(answers).length !== quiz.questions.length}
          className="rounded-full border border-amber-300/40 bg-amber-300/15 px-5 py-3 text-sm font-medium text-amber-100 transition disabled:cursor-not-allowed disabled:opacity-40"
        >
          Lihat hasil
        </button>
        <button
          type="button"
          onClick={resetQuiz}
          className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06]"
        >
          Reset quiz
        </button>
        {submitted ? (
          <p className="text-sm text-slate-300">
            Skor: <span className="font-semibold text-white">{score}</span> /{" "}
            {quiz.questions.length}
          </p>
        ) : null}
      </div>
    </section>
  );
}
