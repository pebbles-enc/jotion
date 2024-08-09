import { v } from "convex/values";

import { mutation, query } from "./_generated/server";
import { Doc, Id} from "./_generated/dataModel";
import { requiresAuth } from "./_middleware/utils";

export const archive = mutation({
  args: { id: v.id("documents") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated")
    }

    // const identity = requiresAuth(ctx, args);

    const userID = identity.subject;

    const existingDocument = await ctx.db.get(args.id);

    if (!existingDocument) {
      throw new Error("Not found")
    }

    if (existingDocument.userId !== userID) {
      throw new Error("Unauthorized")
    }

    const document = await ctx.db.patch(args.id, {
      isArchived: true,
    })

    // const recursiveArchive = async 

    return document;
  }
})

export const getSidebar = query({
  args: {
    parentDocument: v.optional(v.id("documents"))
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated")
    }

    // requiresAuth(ctx, args);

    const userId = identity.subject;

    const documents = await ctx.db
      .query("documents")
      .withIndex("by_user_parent", (q) =>
        q
          .eq("userId", userId)
          .eq("parentDocument", args.parentDocument)
    
      )
      .filter((q) =>
        q.eq(q.field("isArchived"), false)
      )
      .order("desc")
      .collect();

      return documents;
  }

})

export const get = query({
  
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const documents = await ctx.db.query("documents").collect();

    return documents;
  }
})

export const create = mutation({
  args: {
    title: v.string(),
    parentDocument: v.optional(v.id("documents"))
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    // Early return in Typescript, Node, Convex =)
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;

    const document = await ctx.db.insert("documents",
      {
        title: args.title,
        parentDocument: args.parentDocument,
        userId,
        isArchived: false,
        isPublished: false
      }
    )
  }
})