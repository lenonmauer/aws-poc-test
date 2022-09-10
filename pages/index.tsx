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
        <p>Headers:</p>
        <code>{JSON.stringify(props.headers)}</code>
      </div>

      <hr />

      <div>
        <p>Source: {utm.source}</p>
        <p>Campaign: {utm.campaign}</p>
      </div>

      <hr />

      <p>NOW: {props.now}</p>
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
