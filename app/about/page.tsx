
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About",
    description: "About my mini blog.",
  };

export default function AboutPage() {
    return (
        <main>
            <h1>About Us</h1>
            <p>We love to make apps!</p>
        </main>
    )
}