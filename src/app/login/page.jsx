import Head from "next/head"
import Image from "next/image"
import elite from "../../../public/elite.png"

export default function Login() {
    return (
      <main className="min-h-screen flex items-center justify-center bg-body py-12 px-4 sm:px-6 lg:px-8">
        <Head>
            <title>Login</title>
        </Head>

        <div className="max-w-sm w-full space-y-8">
            <div>
            <Image
                className="mx-auto h-12 w-auto"
                src={elite}
                alt="Workflow"
                width={200}
                height={200}
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-primary">Sign in to your account</h2>
            </div>
            <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                <label htmlFor="email-address" className="sr-only">
                    Email 
                </label>
                <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-primary rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                />
                </div>
                <div>
                <label htmlFor="password" className="sr-only">
                    Senha
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-primary rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-primary">
                    Lembrar senha
                </label>
                </div>

                <div className="text-sm">
                <a href="#" className="font-medium text-secondary hover:text-[#f7a881]">
                    Esqueceu sua senha?
                </a>
                </div>
            </div>

            <div>
                <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-[#3d3e68] focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                Sign in
                </button>
            </div>
            </form>
        </div>
      </main>
    )
  }
  