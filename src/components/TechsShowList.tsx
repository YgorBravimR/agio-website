import Image from "next/image";

interface ITechsShowListProps {
  techList: ITechItem[]
  label: string;
}

export interface ITechItem {
  name: string;
  iconUrl: string;
}

export function TechsShowList({ techList, label }: ITechsShowListProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 whitespace-nowrap">
      <strong className="text-lg w-32">{label}</strong>
      <ul className="grid grid-cols-3 md:flex items-center justify-center gap-x-12 gap-y-4 md:gap-x-4">
        {
          techList.map((tech, i) => (
            <li key={tech.name + i}>
              <Image
                className="rounded-xl w-16 h-16 md:w-20 md:h-20"
                src={tech.iconUrl}
                alt={tech.name}
                width={40}
                height={40}
              />
            </li>
          ))
        }
      </ul>
    </div>
  )
}
