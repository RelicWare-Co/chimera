import LayoutDefault from "../LayoutDefault";
import { AppShell } from "@mantine/core";
import Header from "@/components/restaurant/Header";
import Aside from "@/components/restaurant/Aside";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<LayoutDefault>
			<AppShell header={{
        height: 56
      }}
			aside={{
				width: 400,
				breakpoint: "sm",
			}}
			>
        <AppShell.Header>
          <Header/>
        </AppShell.Header>
				<AppShell.Aside>
					<Aside/>
				</AppShell.Aside>
				<AppShell.Main>{children}</AppShell.Main>
				
			</AppShell>
		</LayoutDefault>
	);
}

export default Layout;
