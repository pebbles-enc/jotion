export async function requiresAuth(ctx: any, args: any) {
  const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated")
    }

    console.log("caca")
}