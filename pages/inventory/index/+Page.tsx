import {
	Text,
	Card,
	Center,
	Container,
	Group,
	Stack,
	Title,
	Button,
	ThemeIcon,
	TextInput,
} from "@mantine/core";
import { IconFilter, IconHome, IconSearch } from "@tabler/icons-react";

function InventoryIndex() {
	return (
		<Group grow bg={"#edede9"} justify="center" align="center" h={"92dvh"}>
			<Stack mx={"4rem"}>
				<Group grow justify="space-between">
					<Title fw={700}>Inventario</Title>
					<Group justify="end">
						<Button>Exportar</Button>
						<Button>Crear Inventario</Button>
					</Group>
				</Group>
				<Group grow justify="center" align="center">
					<Card h={"70dvh"}>
						<Card.Section>
							<Group grow justify="space-between" mx={"md"} mt={"md"}>
								<Group>
									<ThemeIcon variant="light">
										<IconHome />
									</ThemeIcon>
                  <Text>Inventario</Text>
								</Group>
								<Group justify="end">
									<TextInput placeholder="Buscar" leftSection={<IconSearch/>} />
                  <Button leftSection={<IconFilter/>}>
                    Filtrar
                  </Button>
								</Group>
							</Group>
						</Card.Section>
						<Text>Hola</Text>
					</Card>
				</Group>
			</Stack>
		</Group>
	);
}

export default InventoryIndex;
