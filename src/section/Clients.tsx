import { clientReviews } from '../constants';
import {Star} from "lucide-react";

export const Clients = () => {
    return (
        <section className="c-space my-20">
            <h3 className="head-text">Hear from My Clients</h3>

            <div className="client-container">
                {clientReviews.map((item) => (
                    <div key={`review-${item.id}`} className="client-review">
                        <div>
                            <p className="text-nka--white-800 font-light">{item.review}</p>

                            <div className="client-content">
                                <div className="flex gap-3">
                                    <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-nka--white-800">{item.name}</p>
                                        <p className="text-nka--white-500 md:text-base text-sm font-light">{item.position}</p>
                                    </div>
                                </div>

                                <div className="flex self-end items-center gap-2">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <Star key={index} color="#ffba00" fill="#ffba00" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
