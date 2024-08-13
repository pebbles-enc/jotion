export async function requiresAuth(ctx: any, args: any) {
  const identity = ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated")
    }
    // console.log("todo en orden!")
    return identity;
}