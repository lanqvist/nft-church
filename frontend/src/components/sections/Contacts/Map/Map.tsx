import { FC, useEffect, useRef } from 'react';

import ymaps from '@lib/ymaps';

import { MapProps } from './Map.types';

export const Map: FC<MapProps> = ({ className }) => {
    const mapRef = useRef<ymaps.Map | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        ymaps.ready(() => {
            if (containerRef.current) {
                const map = new ymaps.Map(
                    containerRef.current,
                    {
                        center: [56.140805, 47.262379],
                        zoom: 16,
                        controls: [],
                    },
                    {
                        suppressMapOpenBlock: true,
                        yandexMapDisablePoiInteractivity: true,
                    }
                );

                map.geoObjects.add(
                    new ymaps.Placemark([56.140805, 47.262379], {
                        iconCaption: 'ул. Калинина 62',
                    })
                );

                mapRef.current = map;
            }
        });

        return () => {
            mapRef.current?.destroy();
        };
    }, [containerRef]);

    return <div className={className} ref={containerRef} />;
};
