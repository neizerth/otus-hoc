import { createContext, useContext, useState } from "react";

export const LanguageContext = createContext<{
	language: string;
	setLanguage: (language: string) => void;
}>({
	language: "en",
	setLanguage: () => {},
});

export const LanguageProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [language, setLanguage] = useState<string>("en");

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	return useContext(LanguageContext);
};
