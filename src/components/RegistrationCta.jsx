import { RegistrationButton } from "./RegistrationButton";
import { getWorkshopDates } from "../utils/dateUtils";

export function RegistrationCta() {
    const { discountDateString, workshopDateString } = getWorkshopDates();
    const currentYear = new Date().getFullYear();

    return (
        <section className="bg-neutral-100 pb-6 md:pb-8">
            <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-4">
                <RegistrationButton />
            </div>

            <p className="text-base md:text-xl font-semibold font-montserrat text-black">
                Register before{" "}
                <strong className="font-black text-orange-400">
                {discountDateString} {currentYear}
                </strong>{" "}
                to unlock bonuses worth{" "}
                <strong className="font-black text-orange-400">₹ 16,000</strong>
            </p>
            </div>
        </section>
    );
}