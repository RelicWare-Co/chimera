import { text, integer, sqliteTable, numeric } from "drizzle-orm/sqlite-core";
export const users = sqliteTable("users", {
	id: integer("id").primaryKey({ autoIncrement: true }).unique(),
	name: text("name").notNull(),
});

export type NewUser = typeof users.$inferInsert;

export const products = sqliteTable("products", {
    id: integer("id").primaryKey({ autoIncrement: true }).unique(),
    name: text("name").notNull(),
    description: text("description"),
    price: numeric("price").notNull(),
    sku: text("sku").notNull(),
    categoryId: integer("categoryId").notNull().references(() => categories.id),
    supplierId: integer("supplierId").notNull().references(() => suppliers.id),
    stock: integer("stock").notNull(),
    createdAt: text("createdAt").notNull(),
    updatedAt: text("updatedAt").notNull(),
});

export const categories = sqliteTable("categories", {
    id: integer("id").primaryKey({ autoIncrement: true }).unique(),
    name: text("name").notNull(),
    description: text("description"),
    createdAt: text("createdAt").notNull(),
    updatedAt: text("updatedAt").notNull(),
});

export const suppliers = sqliteTable("suppliers", {
    id: integer("id").primaryKey({ autoIncrement: true }).unique(),
    name: text("name").notNull(),
    contactName: text("contactName").notNull(),
    contactEmail: text("contactEmail").notNull(),
    contactPhone: text("contactPhone").notNull(),
    address: text("address").notNull(),
    createdAt: text("createdAt").notNull(),
    updatedAt: text("updatedAt").notNull(),
});

export const inventory = sqliteTable("inventory", {
    id: integer("id").primaryKey({ autoIncrement: true }).unique(),
    productId: integer("productId").notNull().references(() => products.id),
    quantity: integer("quantity").notNull(),
    locationId: integer("locationId").notNull().references(() => locations.id),
    lastUpdated: text("lastUpdated").notNull(),
});

export const locations = sqliteTable("locations", {
    id: integer("id").primaryKey({ autoIncrement: true }).unique(),
    name: text("name").notNull(),
    description: text("description"),
    createdAt: text("createdAt").notNull(),
    updatedAt: text("updatedAt").notNull(),
});


export const purchaseOrders = sqliteTable("purchaseOrders", {
    id: integer("id").primaryKey({ autoIncrement: true }).unique(),
    supplierId: integer("supplierId").notNull().references(() => suppliers.id),
    userId: integer("userId").notNull().references(() => users.id),
    status: text("status").notNull(),
    totalAmount: numeric("totalAmount").notNull(),
    createdAt: text("createdAt").notNull(),
    updatedAt: text("updatedAt").notNull(),
});

export const purchaseOrderDetails = sqliteTable("purchaseOrderDetails", {
    id: integer("id").primaryKey({ autoIncrement: true }).unique(),
    purchaseOrderId: integer("purchaseOrderId").notNull().references(() => purchaseOrders.id),
    productId: integer("productId").notNull().references(() => products.id),
    quantity: integer("quantity").notNull(),
    price: numeric("price").notNull(),
    createdAt: text("createdAt").notNull(),
    updatedAt: text("updatedAt").notNull(),
});