import { Element} from "react-scroll";
import { teamMembers } from "../constants/index.jsx";
import TeamItem from "../components/TeamItem.jsx";

const Team = () => {
    const halfLength = Math.floor(teamMembers.length / 2);
  return (
    <Element name="team">
        <section className='relative z-2 py-24 md:py-28 lg:py-40'>
        <div className="container block lg:flex">
            <div className="testimonials_head-res relative z-2 mr-20 flex-300">
                <p className='caption mb-5 max-md:mb-2.5'>Innovative minds working together to drive success</p>
                <h3 className='h3 max-md:h5 text-p4'>Meet Our Team</h3>
            </div>
            <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
                <div className="testimonials_group-after flex-50">
                {teamMembers.slice(0, halfLength).map((member) => (
                    <TeamItem
                        key={member.id}
                        item={member}
                        containerClassName="last:after:hidden last:after:max-md:block"
                    />
                ))}
                </div>
                
                <div className="flex-50">
                {teamMembers.slice(halfLength).map((member) => (
                    <TeamItem
                        key={member.id}
                        item={member}
                        containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
                    />
                ))}
            </div>
            </div>
        </div>
        </section>
    </Element>
    );
};


export default Team