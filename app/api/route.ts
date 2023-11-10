// HACK: http://localhost:3000/api
export async function GET(request: Request) {
  return Response.json({ key: "GET" })
}

export async function POST(request: Request) {
  return Response.json({ key: "POST" })
}

export async function PUT(request: Request) {
  return Response.json({ key: "PUT" })
}

export async function PATCH(request: Request) {
  return Response.json({ key: "PATCH" })
}

export async function DELETE(request: Request) {
  return Response.json({ key: "DELETE" })
}

// HACK: 対応していない
// export async function HEAD(request: Request) {
//   return Response.json({ key: "HEAD" })
// }

export async function OPTIONS(request: Request) {
  return Response.json({ key: "OPTIONS" })
}