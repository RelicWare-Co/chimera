CREATE TABLE `categories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`createdAt` text NOT NULL,
	`updatedAt` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `inventory` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`productId` integer NOT NULL,
	`quantity` integer NOT NULL,
	`locationId` integer NOT NULL,
	`lastUpdated` text NOT NULL,
	FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`locationId`) REFERENCES `locations`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `locations` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`createdAt` text NOT NULL,
	`updatedAt` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`price` numeric NOT NULL,
	`sku` text NOT NULL,
	`categoryId` integer NOT NULL,
	`supplierId` integer NOT NULL,
	`stock` integer NOT NULL,
	`createdAt` text NOT NULL,
	`updatedAt` text NOT NULL,
	FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`supplierId`) REFERENCES `suppliers`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `purchaseOrderDetails` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`purchaseOrderId` integer NOT NULL,
	`productId` integer NOT NULL,
	`quantity` integer NOT NULL,
	`price` numeric NOT NULL,
	`createdAt` text NOT NULL,
	`updatedAt` text NOT NULL,
	FOREIGN KEY (`purchaseOrderId`) REFERENCES `purchaseOrders`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `purchaseOrders` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`supplierId` integer NOT NULL,
	`userId` integer NOT NULL,
	`status` text NOT NULL,
	`totalAmount` numeric NOT NULL,
	`createdAt` text NOT NULL,
	`updatedAt` text NOT NULL,
	FOREIGN KEY (`supplierId`) REFERENCES `suppliers`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `suppliers` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`contactName` text NOT NULL,
	`contactEmail` text NOT NULL,
	`contactPhone` text NOT NULL,
	`address` text NOT NULL,
	`createdAt` text NOT NULL,
	`updatedAt` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `categories_id_unique` ON `categories` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `inventory_id_unique` ON `inventory` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `locations_id_unique` ON `locations` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `products_id_unique` ON `products` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `purchaseOrderDetails_id_unique` ON `purchaseOrderDetails` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `purchaseOrders_id_unique` ON `purchaseOrders` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `suppliers_id_unique` ON `suppliers` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_id_unique` ON `users` (`id`);