// const InfoAlert = withType('info', Alert) -> Alert<Info>
// <InfoAlert> -> <Alert type="info">

import type { ComponentProps, ComponentType } from "react";

export const withType = <Type extends string>(
	type: Type,
	Component: ComponentType<{ type: Type }>,
) => {
	function WithType(props: Omit<ComponentProps<typeof Component>, "type">) {
		return <Component {...props} type={type} />;
	}
	const componentName = Component.displayName || Component.name || "Component";
	WithType.displayName = `WithType(${componentName}:${type})`;
	return WithType;
};
