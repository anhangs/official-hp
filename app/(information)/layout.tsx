export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* (フォルダ)/フォルダ/pageとした場合にはこのlayoutが共通して使用される */}
      <div>(information) layout</div>
      <nav></nav>
      {children}
    </section>
  )
}