export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* HACK: templateはlayoutの中に表示される */}
      {/* HACK: templateは画面遷移の度に再レンダリングされる */}
      {/* <div>template</div> */}
      {children}
    </div>
  );
}
