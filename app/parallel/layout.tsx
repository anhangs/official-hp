export default function Layout(props: {
  children: React.ReactNode
  a: React.ReactNode
  b: React.ReactNode
}) {
  return (
    <>
      {/* (フォルダ)/フォルダ/pageとした場合にはこのlayoutが共通して使用される */}
      <div>parallel layout</div>
      {props.children}
      {props.a}
      {props.b}
    </>
  )
}