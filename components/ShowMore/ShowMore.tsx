'use client'
import {IShowMore} from "@/components/ShowMore/interface";
import {useRouter} from "next/navigation";
import {Button} from "@/components/Button";
import {updateSearcheParams} from "@/utils";


export const ShowMore = ({pageNumber, isNext}: IShowMore) => {
    const router = useRouter()

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = updateSearcheParams('limit', `${newLimit}`);

        router.push(newPathName);
    }
    return (
        <div className={'w-full flex-center gap-5 mt-10'}>
            {!isNext && (
                <Button
                    title={'Покажи больше'}
                    btnType={'button'}
                    containerStyles={'bg-primary-blue rounded-full text-white'}
                    handleClick={handleNavigation}
                />
            )}
        </div>
    );
};
