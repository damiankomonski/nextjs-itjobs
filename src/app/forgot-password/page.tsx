import Link from "next/link";

export default function ForgotPassword(){
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div className="w-full md:w-[480px] px-4 py-4">
                <h1 className="h3">Zapomniałem hasła</h1>
                <form>
                    <div className="mb-3">
                        <label className="w-full mb-2 block text-black">Adres email</label>
                        <input className="w-full border border-2 border-black py-[10px] px-3 focus:outline-none focus:border-black" placeholder="Adres email" />
                    </div>
                    <div className="mt-4">
                        <button className="w-full bg-black text-white py-3 font-semibold" type="submit">Przypomnij hasło</button>
                        <div className="flex justify-center">
                            <p className="mx-auto mt-4"><Link href="/login" className="underline inline-block">Zaloguj się</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}