export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-screen h-screen flex flex-row justify-center items-center bg-neutral-900">
            {children}
        </div>
    );
}
