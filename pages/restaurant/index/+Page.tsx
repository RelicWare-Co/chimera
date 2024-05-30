import {
	ActionIcon,
	Badge,
	Button,
	Card,
	Center,
	Flex,
	Grid,
	Group,
	Image,
	Stack,
	Text,
	TextInput,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconMinus, IconPlus } from "@tabler/icons-react";

function RestaurantIndex() {
	return (
		<Group grow justify="space-between" mx={"md"} mt={"md"}>
			<Stack gap={"xs"}>
				<Group grow>
					<Text size="xl" fw={600}>
						Lista de Ordenes
					</Text>
					<Group justify="end">
						<Button radius={"lg"}>Ver mas</Button>
					</Group>
				</Group>
				<Group grow align="center">
					<Carousel
						slideGap={"sm"}
						slideSize="10%"
						align={"start"}
						withControls={false}
					>
						<OrderCard />
						<OrderCard />
						<OrderCard />
						<OrderCard />
						<OrderCard />
						<OrderCard />
					</Carousel>
				</Group>
				<Text size="xl" fw={600}>Menu</Text>
				<Flex direction={"row"} gap={"sm"}>
					<Button radius={"lg"} variant="light" size={"sm"}>
						Todos
					</Button>
					<Button
						color={"white"}
						c={"gray"}
						radius={"lg"}
						variant="default"
						size={"sm"}
					>
						Entradas
					</Button>
					<Button
						color={"white"}
						c={"gray"}
						radius={"lg"}
						variant="default"
						size={"sm"}
					>
						Bebidas
					</Button>
					<Button
						color={"white"}
						c={"gray"}
						radius={"lg"}
						variant="default"
						size={"sm"}
					>
						Arabe
					</Button>
					<Button color={"white"} c={"gray"} radius={"lg"} variant="default">
						Vegetariana
					</Button>
				</Flex>

				<Grid>
					<GridDish />
					<GridDish />
					<GridDish />
					<GridDish />
					<GridDish />
					<GridDish />
					<GridDish />
					<GridDish />
					<GridDish />
					<GridDish />
					<GridDish />
					<GridDish />
					<GridDish />
				</Grid>
			</Stack>
		</Group>
	);
}

export default RestaurantIndex;

function OrderCard() {
	return (
		<Carousel.Slide>
			<Card withBorder w={"15rem"}>
				<Card.Section px={"md"} pt={"sm"}>
					<Group grow justify="space-between">
						<Text>Fecha</Text>
						<Group justify="end">
							<Badge>Listo</Badge>
						</Group>
					</Group>
				</Card.Section>
				<Card.Section px={"md"}>
					<Text size="lg">Nombre</Text>
				</Card.Section>
				<Card.Section px={"md"} pb={"sm"}>
					<Group grow justify="space-between">
						<Group>
							<Center>
								<Text size="sm">2 Item</Text> <Text size="sm">Tabla 22</Text>
							</Center>
						</Group>
						<Group justify="end">
							<Text>#SDFSFSDF</Text>
						</Group>
					</Group>
				</Card.Section>
			</Card>
		</Carousel.Slide>
	);
}

function GridDish() {
	return (
		<Grid.Col span={4}>
			<Card withBorder>
				<Group grow justify="space-between">
					<Image
						radius={"md"}
						src={"https://images.unsplash.com/photo-1546069901-ba9599a7e63c"}
						w={100}
						h={100}
					/>
					<Stack gap={"xs"}>
						<Text fw={600} size="md">
							Platillo
						</Text>
						<Text c={"gray"} size="sm">
							Category
						</Text>
						<Text size="lg" fw={600}>
							$ 10.000
						</Text>
					</Stack>
				</Group>
				<Group grow mt={"sm"}>
					<Group>
						<ActionIcon>
							<IconMinus />
						</ActionIcon>
					</Group>
					<TextInput
						readOnly
						size="sm"
						value={2}
						w={"100%"}
						variant="filled"
						styles={{
							input: {
								textAlign: "center",
							},
						}}
					/>
					<Group justify="end">
						<ActionIcon>
							<IconPlus />
						</ActionIcon>
					</Group>
				</Group>
			</Card>
		</Grid.Col>
	);
}
