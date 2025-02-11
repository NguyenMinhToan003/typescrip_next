import VerifyAccount from "@/components/element/verify-account"

const Page = ({params}: {params: { id: string }}) => {
  return <>
    <VerifyAccount id={params.id} />
  </>
}

export default Page
