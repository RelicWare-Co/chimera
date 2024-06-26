import {
	Menu,
	Group,
	Center,
	Burger,
	Container,
	Text,
	ThemeIcon,
	UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { navigate } from "vike/client/router";
import {
	Icon123,
	IconChevronDown,
	IconFileInvoice,
	IconHistory,
	IconHome,
	IconInvoice,
	IconMenuOrder,
} from "@tabler/icons-react";
import classes from "./Header.module.css";

type Links = {
	link: string;
	label: string;
	icon: typeof IconHome;
	links?: Links[];
};

const links: Links[] = [
	{ link: "/restaurant/", label: "Inicio", icon: IconHome },
	// {
	//   link: '#1',
	//   label: 'Learn',
	//   links: [
	//     { link: '/docs', label: 'Documentation' },
	//     { link: '/resources', label: 'Resources' },
	//     { link: '/community', label: 'Community' },
	//     { link: '/blog', label: 'Blog' },
	//   ],
	// },
	{ link: "/restaurant/orders", label: "Ordenes", icon: IconFileInvoice },
	{ link: "/inventory", label: "Inventario", icon: Icon123 },
	{ link: "/restaurant/history", label: "Historial", icon: IconHistory },
	{ link: "/restaurant/billing", label: "Facturacion", icon: IconInvoice },
	// {
	//   link: '#2',
	//   label: 'Support',
	//   links: [
	//     { link: '/faq', label: 'FAQ' },
	//     { link: '/demo', label: 'Book a demo' },
	//     { link: '/forums', label: 'Forums' },
	//   ],
	// },
];

function Header() {
	const [opened, { toggle }] = useDisclosure(false);

	const items = links.map((link) => {
		const menuItems = link.links?.map((item) => (
			<Menu.Item key={item.link}>{item.label}</Menu.Item>
		));

		if (menuItems) {
			return (
				<Menu
					key={link.label}
					trigger="hover"
					transitionProps={{ exitDuration: 0 }}
					withinPortal
				>
					<Menu.Target>
						<a
							href={link.link}
							className={classes.link}
							onClick={(event) => event.preventDefault()}
						>
							<Center>
								<span className={classes.linkLabel}>{link.label}</span>
								<IconChevronDown size="0.9rem" stroke={1.5} />
							</Center>
						</a>
					</Menu.Target>
					<Menu.Dropdown>{menuItems}</Menu.Dropdown>
				</Menu>
			);
		}

		return (
			<UnstyledButton
				key={link.label}
				className={classes.link}
				onClick={() => navigate(link.link)}
			>
				<Group>
					<ThemeIcon variant="transparent" c={"gray"} size={"sm"}>
						<link.icon />
					</ThemeIcon>
					<Text>{link.label}</Text>
				</Group>
			</UnstyledButton>
		);
	});

	return (
		<header className={classes.header}>
			<Container size="md">
				<div className={classes.inner}>
					<Text>Logo</Text>
					<Group gap={5} visibleFrom="sm">
						{items}
					</Group>
					<Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
					<Text>UserCard</Text>
				</div>
			</Container>
		</header>
	);
}

export default Header;
