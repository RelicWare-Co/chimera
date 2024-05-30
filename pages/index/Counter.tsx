import { Button, Loader, TextInput } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { onCreateUser, onGetUsers } from "./Counter.telefunc";
import { useQuery } from "@tanstack/react-query";

export function Counter() {
	const [userName, setUserName] = useState("");
	const {
		isPending,
		error,
		data,
		refetch: refetchUsers,
	} = useQuery({
		queryKey: ["users"],
		queryFn: onGetUsers,
	});

	return (
		<>
			{isPending && <Loader type="bars" />}
			{error && <div>Error: {error.message}</div>}
			{data?.map((user) => {
				return <div key={user.id}>{user.name}</div>;
			})}

			<TextInput
				value={userName}
				onChange={(e) => setUserName(e.target.value)}
			/>
			<Button
				onClick={() => {
					onCreateUser({ name: userName });
					setUserName("");
					refetchUsers();
				}}
			>
				Create user
			</Button>
		</>
	);
}
