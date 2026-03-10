import './index.scss';


export function Image({src, ...rest}){
    return <img src={src} {...rest}/>
}