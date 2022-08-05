import type { NextPage, GetServerSideProps } from 'next'

const Home: NextPage = (props: any) => {
  return (
    <div>
      Hello world2
      <br />
      <br />
      <div>
        Headers: <code>{JSON.stringify(props.headers)}</code>
      </div>
    </div>

    <div>
      NOW: {props.now}
    </div>
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
