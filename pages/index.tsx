import { useRouter } from 'next/router'
import { useMemo } from 'react'

import type { NextPage, GetServerSideProps } from 'next'

function useUtm() {
  const { query } = useRouter()

  const tags = useMemo(() => {
    const { utm_campaign, utm_source } = query

    return {
      campaign: utm_campaign,
      source: utm_source,
    }
  }, [query])

  return tags
}

const Home: NextPage = (props: any) => {
  const utm = useUtm()

  console.log({ utm })

  return (
    <>
      <div>
        Hello world2
        <br />
        <br />
        <div>
          Headers: <code>{JSON.stringify(props.headers)}</code>
        </div>
      </div>
      <div>NOW: {props.now}</div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { headers } = ctx.req
  const now = Date.now()

  return {
    props: {
      headers,
      now,
    },
  }
}

export default Home
