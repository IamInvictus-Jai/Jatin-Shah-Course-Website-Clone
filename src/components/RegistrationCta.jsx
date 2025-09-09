import { RegistrationButton } from "./RegistrationButton";

export function RegistrationCta() {
    return (
        <section className="bg-neutral-100 pb-6 md:pb-8">
            <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-4">
                <RegistrationButton />
            </div>

            <p className="text-base md:text-xl font-semibold font-montserrat text-black">
                Register before{" "}
                <strong className="font-black text-orange-400">
                August 29, 2025
                </strong>{" "}
                to unlock bonuses worth{" "}
                <strong className="font-black text-orange-400">₹ 16,000</strong>
            </p>
            </div>
        </section>
    );
}