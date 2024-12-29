'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function ProgressBarr() {
    return (
        <ProgressBar
          height="3px"
          color="#FFF100"
          options={{ showSpinner: false }}
          shallowRouting
        />
    )
}
