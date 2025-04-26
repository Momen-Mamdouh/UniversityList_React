

function HomeSectionsData(props:any) {

  return (
    <div className={`homeSectionsData ${props.sectionClasses}  `}>
         {props.children}
    </div>
  )
}

export default HomeSectionsData;