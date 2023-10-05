
interface Size{
    xs:string;
    sm:string;
    md:string;
    lg:string;
    xl:string;
    xxl:string;
}

export const size:Size={
    xs:'400px',
    sm:'600px',
    md:'900px',
    lg:'1280px',
    xl:'1440px',
    xxl:'1920px'
}

export const device={
    xs:`(max-width:${size.xs})`,
    sm:`(max-width:${size.sm})`,
    md:`(max-width:${size.md})`,
    lg:`(max-width:${size.lg})`,
    xl:`(max-width:${size.xl})`,
    xxl:`(max-width:${size.xxl})`,
}