import Link from "next/link"
import styles from "./Signup.module.css"
import { redirect } from "next/navigation";
import prisma from "../lib/prisma";

export default function SignupPage() {
    async function submitAction(formData: FormData) {
        "use server";

        const name = String(formData.get('name'));
        const email = String(formData.get('email'));

        const data = { 
            name, 
            email 
        }

        if(name && email) {
            await prisma.user.create({ data })
            redirect('/')
        }
    }

    return (
        <main className={styles.signup}>

            <h1>Signup</h1>

            <form action={submitAction}>
                <input name="name" placeholder="Name" type="text" required />
                <input name="email" placeholder="Email address" type="email" required />
                <button type="submit">Sign Up</button>
                <Link className={styles.back} href="/">or Cancel</Link>
            </form>


        </main>
    ) 
}