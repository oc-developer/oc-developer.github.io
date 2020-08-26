import React from 'react'
import './leftbarIcon.scss'

export default function LeftbarIcon(props: LeftbarIconProps) {

    const close = props.state === 'open'
    return (
        <svg className={ props.state === 'open' ? "leftbar-icons open" : "leftbar-icons"} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="arrow-right" d="M0 24C0 21.7909 1.79086 20 4 20H44C46.2091 20 48 21.7909 48 24V24C48 26.2091 46.2091 28 44 28H4C1.79086 28 0 26.2091 0 24V24Z" fill='black' />
            <path id="arrow-right" d="M26.8284 41.424C25.2663 39.8619 25.2663 37.3292 26.8284 35.7671L40.7671 21.8284C42.3292 20.2663 44.8619 20.2663 46.424 21.8284V21.8284C47.9861 23.3905 47.9861 25.9232 46.424 27.4853L32.4853 41.424C30.9232 42.9861 28.3905 42.9861 26.8284 41.424V41.424Z" fill="black" />
            <path id="arrow-right" d="M26.8284 6.82843C28.3905 5.26633 30.9232 5.26633 32.4853 6.82843L46.424 20.7671C47.9861 22.3292 47.9861 24.8619 46.424 26.424V26.424C44.8619 27.9861 42.3292 27.9861 40.7671 26.424L26.8284 12.4853C25.2663 10.9232 25.2663 8.39052 26.8284 6.82843V6.82843Z" fill="black" />
            <path id="hamburger" d="M0 40C0 37.7909 1.79086 36 4 36H44C46.2091 36 48 37.7909 48 40V40C48 42.2091 46.2091 44 44 44H4C1.79086 44 0 42.2091 0 40V40Z" fill="black"  />
            <path id="hamburger" d="M0 24C0 21.7909 1.79086 20 4 20H44C46.2091 20 48 21.7909 48 24V24C48 26.2091 46.2091 28 44 28H4C1.79086 28 0 26.2091 0 24V24Z" fill="black"  />
            <path id="hamburger" d="M0 8C0 5.79086 1.79086 4 4 4H44C46.2091 4 48 5.79086 48 8V8C48 10.2091 46.2091 12 44 12H4C1.79086 12 0 10.2091 0 8V8Z" fill="black" />
            <path id="close" d="M6.82843 40.7696C5.26633 39.2075 5.26633 36.6748 6.82843 35.1127L35.1127 6.82843C36.6748 5.26633 39.2075 5.26633 40.7696 6.82843V6.82843C42.3316 8.39052 42.3316 10.9232 40.7696 12.4853L12.4853 40.7696C10.9232 42.3316 8.39052 42.3316 6.82843 40.7696V40.7696Z" fill="white" opacity={close ? 1 : 0} />
            <path id="close" d="M6.82843 6.82843C8.39052 5.26633 10.9232 5.26633 12.4853 6.82843L40.7696 35.1127C42.3316 36.6748 42.3316 39.2075 40.7696 40.7696V40.7696C39.2075 42.3316 36.6748 42.3316 35.1127 40.7696L6.82843 12.4853C5.26633 10.9232 5.26633 8.39052 6.82843 6.82843V6.82843Z" fill="white" opacity={close ? 1 : 0} />
        </svg >

    )
}

type LeftbarIconProps = {
    state: string;
}