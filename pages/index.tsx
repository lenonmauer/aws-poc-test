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
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { headers } = ctx.req

  return {
    props: {
      headers,
    },
  }
}

export default Home
