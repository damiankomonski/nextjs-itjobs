import Link from "next/link";

export default function Login(){
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div className="w-full md:w-[480px] px-4 py-4">
                <h1 className="h3">Zaloguj się</h1>
                <form>
                    <div className="mb-3">
                        <label className="w-full mb-2 block text-black">Adres email</label>
                        <input className="w-full border border-2 border-black py-[10px] px-3 focus:outline-none focus:border-black" placeholder="Adres email" />
                    </div>
                    <div className="mb-3">
                        <label className="w-full mb-2 block text-black">Hasło</label>
                        <input className="w-full border border-2 border-black py-[10px] px-3 focus:outline-none focus:border-black" placeholder="Hasło" />
                        <Link href="/forgot-password" className="underline inline-block mt-2">Zapomniałem hasła</Link>
                    </div>
                    <div className="mt-4">
                        <button className="w-full bg-black text-white py-3 font-semibold" type="submit">Zaloguj się</button>
                        <div className="flex justify-center">
                            <p className="mx-auto mt-4">Nie masz konta? <Link href="/signup" className="underline inline-block">Zarejestruj się</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}