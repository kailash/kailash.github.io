export default function footer() {
    return (
        <section id="footer" className="max-w-5xl py-24 px-12">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <p className="mb-4">
                I'm open to new opportunities and collaborations. Feel free to reach out to me via email or connect with me on LinkedIn.
            </p>
            <div className="space-x-4">
                <a href="mailto:kailash@example.com" className="text-accent">
                    Email Me
                </a>
                <a href="https://www.linkedin.com/in/kailash" className="text-accent">
                    LinkedIn
                </a>
            </div>
        </section>
    );
}