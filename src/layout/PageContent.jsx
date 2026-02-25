export default function PageContent({ children}) {
    return(
        <main className="flex flex-col min-h-screen w-full">
            {children}
        </main>
    );
}