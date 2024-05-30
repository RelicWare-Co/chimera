import {
	Button,
	Card,
	Group,
	Stack,
	Text,
	Image,
	ScrollArea,
  ThemeIcon,
} from "@mantine/core";
import { IconTable } from "@tabler/icons-react";

function Aside() {
	return (
		<Group grow mx={"md"} mt={"xs"}>
			<Stack gap={0}>
				<Group grow justify="space-between">
					<Text ta={"left"} size="xl" fw={600}>
						Orden
					</Text>
					<Group justify="end">
            <ThemeIcon>
              <IconTable/>
            </ThemeIcon>
						<Text c={"gray"} ta={"right"} size="sm" fw={600}>
							Mesa 1
						</Text>
					</Group>
				</Group>
				<Group grow justify="space-between">
					<Text c={"gray"} ta={"left"} size="sm" fw={600}>
						5 Elementos
					</Text>
					<Group justify="end">
						<Button variant="transparent" c={"red"}>
							Clear All
						</Button>
					</Group>
				</Group>
				<Stack h={"52dvh"}>
					<ScrollArea offsetScrollbars>
						<Dish />
						<Dish />
						<Dish />
						<Dish />
						<Dish />
					</ScrollArea>
				</Stack>
				<Card
					bg={"#e5e5e5"}
					style={{
						borderTopLeftRadius: "0px",
						borderTopRightRadius: "0px",
						borderBottomLeftRadius: "10px",
						borderBottomRightRadius: "10px",
					}}
				>
					<Group grow>
						<Stack gap={0}>
							<Text ta={"left"} size="lg" fw={600}>
								Resumen de Venta
							</Text>
							<Group grow>
								<Stack gap={0}>
									<Text c={"gray"} ta={"left"} size="md" fw={600}>
										SubTotal
									</Text>
									<Text c={"gray"} ta={"left"} size="md" fw={600}>
										Descuento
									</Text>
									<Text c={"gray"} ta={"left"} size="md" fw={600}>
										Total
									</Text>
								</Stack>
								<Stack
									w={"100%"}
									h={"100%"}
									justify="flex-end"
									align="end"
									gap={0}
								>
									<Text ta={"left"} size="md" fw={600}>
										$ 10.000
									</Text>
									<Text ta={"left"} size="md" fw={600}>
										10%
									</Text>
									<Text ta={"left"} size="md" fw={600}>
										$ 10.000
									</Text>
								</Stack>
							</Group>
						</Stack>
					</Group>
				</Card>
				<Button mt={"md"}>Terminar Venta</Button>
			</Stack>
		</Group>
	);
}

export default Aside;

function Dish() {
	return (
		<Card p={0} py={"xs"}>
			<Group grow>
				<Image
					radius={"md"}
					src={"https://images.unsplash.com/photo-1546069901-ba9599a7e63c"}
					w={100}
					h={100}
				/>
				<Stack>
					<Text>Platillo</Text>
					<Text c={"gray"} size="sm">
						1 Plato
					</Text>
					<Text c={"gray"} size="sm">
						SubTotal:
					</Text>
				</Stack>
				<Stack w={"100%"} h={"100%"} justify="flex-end" align="end">
					<Text>$ 10.000</Text>
				</Stack>
			</Group>
		</Card>
	);
}
