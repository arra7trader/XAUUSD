import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const secret = request.headers.get("x-revalidate-secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return Response.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = (await request.json()) as {
      path?: string;
      tag?: string;
    };

    if (body.tag) {
      revalidateTag(body.tag, "max");
    }

    if (body.path) {
      revalidatePath(body.path);
    }

    return Response.json({ revalidated: true, body });
  } catch {
    return Response.json({ message: "Invalid payload" }, { status: 400 });
  }
}
