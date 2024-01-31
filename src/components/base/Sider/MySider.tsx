import React, {useEffect, useState} from 'react';
import type {MenuProps} from 'antd';
import {Divider, Menu} from 'antd';
import {helpers} from "./sider.helpers";
import {useRouter} from 'next/navigation';
import Title from "antd/lib/typography/Title";
import useSidebarCollapsed from "@/Hooks/useSidebarCollapsed";
import {CustomAutoCompleteInput} from "@/components";

const MySider: React.FC = () => {
    const [openKeys, setOpenKeys] = useState([])
    const route = useRouter().route
    const [currentActiveKey, setCurrentActiveKey] = useState<string>(null)
    const isSiderCollapsed = useSidebarCollapsed()
    const sections = helpers.menuSections()


    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };
    console.log('isSiderCollapsed', isSiderCollapsed)

    const onOpenChange: MenuProps['onOpenChange'] = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
        if (['Election'].indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys)
        } else { setOpenKeys(latestOpenKey ? [latestOpenKey] : []) }
    }

    useEffect(() => {
        if (route !== currentActiveKey) {
            let newKey: string|null = null
            if (route === '/') { newKey = '/' }
            else { newKey = route?.split('/')[1] }
            setCurrentActiveKey(newKey)
            setOpenKeys(helpers.getDefaultOpenKeys(newKey))
        }
    }, [route])

    return (
       <>
           <div className={`columns`}>
               <div className={'column is-3 is-full-width-mobile'}>
                   <div className='flex flex-col items-center'>
                       <div className='mb-4 w-max transition-transform'>
                           <Title
                               style={{color: 'white', fontFamily: 'Permanent Marker'}}
                               level={!isSiderCollapsed ? 2 : 5}
                           >
                               SIGEF
                           </Title>
                       </div>
                   </div>
                   <Divider orientation="right" orientationMargin={50}/>
                   <React.StrictMode>
                       {<Menu
                           mode='inline'
                           style={{backgroundColor: 'transparent', color: '#FFFFFF'}}
                           openKeys={openKeys}
                           onOpenChange={onOpenChange}
                           activeKey={currentActiveKey}
                           defaultSelectedKeys={[currentActiveKey]}
                           defaultOpenKeys={helpers.getDefaultOpenKeys(currentActiveKey)}
                       >
                           {sections.map((section, idx) => (
                               <React.Fragment key={idx}>
                                   {(section.isSubMenu && section.isVisible ? (
                                       <Menu.SubMenu {...section}>
                                           {section.subItems?.map((subItem) => {
                                               if (!subItem.isVisible) return
                                               return (
                                                   <Menu.Item
                                                       key={subItem.key}
                                                       className={(section.hasPermision /**&& !user?.id*/) && 'fade-animation'}
                                                   >
                                                       {subItem.children}
                                                   </Menu.Item>
                                               )
                                           })}
                                       </Menu.SubMenu>
                                   ) : (section.isVisible && !section.isSubMenu) && <>
                                       <Menu.Item
                                           className={(section.hasPermision /**&& !user?.id*/) && 'fade-animation'}
                                           {...section}
                                       >
                                           {section.children}
                                       </Menu.Item>
                                   </>)}
                               </React.Fragment>
                           )) }
                       </Menu>}
                   </React.StrictMode>
               </div>

               {/*<div className='column is-9'>*/}
               {/*    {user?.id ? children : <Loader />}*/}
               {/*</div>*/}
           </div>
       </>
    );
};

export default MySider;
