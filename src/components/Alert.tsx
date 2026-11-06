import type { PropsWithChildren } from "react";
import { withType } from "./withType";

export interface AlertProps extends PropsWithChildren {
	type: "success" | "error" | "warning" | "info";
}

export const Alert = ({ children, type }: AlertProps) => {
	return <div className={`alert alert-${type}`}>{children}</div>;
};

export const InfoAlert = withType("info", Alert);
