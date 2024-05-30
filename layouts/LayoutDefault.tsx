import "normalize.css"
import "@mantine/core/styles.css"
import "@mantine/carousel/styles.css"
import "./tailwind.css"
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function LayoutDefault({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<MantineProvider>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</MantineProvider>
	);
}
