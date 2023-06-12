import {Hero} from "@/components/Hero";
import {SearchBar} from "@/components/SearchBar";
import {CustomFilter} from "@/components/CustomFilter";
import {fetchCars} from "@/utils";
import {CarCard} from "@/components/CarCard";
import {IHome} from "@/types";
import {fuels, yearsOfProduction} from "@/constants";
import {ShowMore} from "@/components/ShowMore";

export default async function Home({searchParams}: IHome) {
    const allCars = await fetchCars({
        manufacturer: searchParams.manufacturer || '',
        year: searchParams.year || 2022,
        fuel: searchParams.fuel || '',
        limit: searchParams.limit || 10,
        model: searchParams.model || '',
    })
    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
        <main className="overflow-hidden">
            <Hero/>
            <div className={'mt-12 padding-x padding-y max-width'} id={'discover'}>
                <div className={'home__text-container'}>
                    <h1 className={'text-4xl font-extrabold'}>
                        Каталог автомобилей
                    </h1>
                    <p>Исследуйте автомобили, которые могут вам понравиться</p>
                </div>

                <div className={'home__filters'}>
                    <SearchBar/>
                    <div className={'home__filter-container'}>
                        <CustomFilter title={'Топливо'} options={fuels}/>
                        <CustomFilter title={'Год'} options={yearsOfProduction}/>
                    </div>
                </div>

                {!isDataEmpty ? (
                    <section>
                        <div className={'home__cars-wrapper'}>
                            {allCars?.map((car) => (
                                <CarCard
                                    car={car}
                                />
                            ))}
                        </div>

                        <ShowMore
                            pageNumber={(searchParams.limit || 10) / 10}
                            isNext={(searchParams.limit || 10) > allCars.length}
                        />

                    </section>
                ) : (
                    <div className={'home__error-contain'}>
                        <h2 className={'text-black text-xl font-bold'}>Результатов нет</h2>
                        <p>{allCars?.message}</p>
                    </div>
                )}

            </div>
        </main>
    )
}
