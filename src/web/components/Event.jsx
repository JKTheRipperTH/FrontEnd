import React from 'react'
import './styles/Event.scss'


/* Credits
* หลังบ้านต้องรออีกสักพักเด๊่ยไปศึกษาก่อนะละกัน
* ส่วนนี้ใช้ได้แต่ยังไม่สมบรูณ์ ด้วยเหตุ ไม่มีหลังบ้านAPI ไม่ทำงาน555
*/

export default function Event({data, loading}) {
    return (
        <div className="event-box border border-1 w-100">
            {!loading ?
                <div className="event-body">
                    <div className="col">
                        <h4>{data.name}</h4>
                        <span className="date">{data.due_date} - {data.end_date}</span>
                        <p>{data.short_desc}</p>
                    </div>
                    <div className="col">
                        {
                            data.event_tags.map(tag => <a className={"category"}>#{tag}</a>)
                        }
                    </div>
                </div>
                :
                <div className="event-body">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-5">
                                <div className="inner-card animate-pulse"/>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-3">
                                <div className="inner-card animate-pulse"/>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12">
                                <div className="inner-card animate-pulse"/>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-2">
                                <div className="inner-card animate-pulse"/>
                            </div>
                            <div className="col-1">
                                <div className="inner-card animate-pulse"/>
                            </div>
                            <div className="col-2">
                                <div className="inner-card animate-pulse"/>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {!loading?
                <div className="event-footer">
                    <div className="col">
                        <div className="col-item">
                            <h5>ชนะ</h5>
                            <p>{data.winner_name}</p>
                        </div>
                        <div className="col-item">
                            <h5>เงินรางวัลรวม</h5>
                            <p>{data.prize}</p>
                        </div>
                    </div>
                    {data.status === "Upcoming" && <button className="btn btn-default text-uppercase">มีส่วนร่วม <i className="fas fa-arrow-right"/></button>}
                </div>
                :
                <div className="event-footer">
                    <div className="col">
                        <div className="col-2 mx-1">
                            <div className="inner-card animate-pulse w-75"/>
                            <div className="inner-card animate-pulse mt-2"/>
                        </div>
                        <div className="col-3 mx-1">
                            <div className="inner-card animate-pulse w-75"/>
                            <div className="inner-card animate-pulse mt-2"/>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
