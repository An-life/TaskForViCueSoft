import {ReactNode} from "react";

import styles from "./styles.module.scss";

type Props = {
    isLoading: boolean;
    children: ReactNode;
};

export const LoaderContainer = ({isLoading, children}: Props) => {
    const onContentClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => event.preventDefault();

    if (isLoading) {
        return (
            <div className={styles.loaderContainer} onClick={onContentClick}>
                <div className={styles.spinWrapper}>
                    <div className={styles.spinner}>
                    </div>
                </div>
            </div>
        );
    }

    return <>{children}</>;
};