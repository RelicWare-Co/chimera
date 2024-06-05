import LayoutDefault from "../LayoutDefault";
import { AppShell } from "@mantine/core";
import Header from "@/components/restaurant/Header";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<LayoutDefault>
			<AppShell
				header={{
					height: 56,
				}}
				
			>
				<AppShell.Header>
					<Header />
				</AppShell.Header>
				<AppShell.Main>{children}</AppShell.Main>
			</AppShell>
		</LayoutDefault>
	);
}

export default Layout;
