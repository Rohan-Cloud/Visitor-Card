import { Tag, Input, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import * as css from "./style.js";
export default function CustomeTag(props) {
    const { tagList} = props
    const [state, setState] = useState({
        tags: tagList,
        inputVisible: false,
        inputValue: '',
        editInputIndex: -1,
        editInputValue: '',
        keywordlen: 0
    })
    let textInput = null;
    const handleClose = (removedTag) => {
        const tags = state.tags.filter(tag => tag !== removedTag);
        let len = 0
        tags.map((item,) => {
            len = item.length + len + 1
        })

        setState((prevState => ({ ...prevState, keywordlen: len })))
        setState((prevState => ({ ...prevState, tags: tags })))
    }
    const showInput = () => {

        setState((prevState => ({ ...prevState, inputVisible: true })))

    };

    const handleInputChange = e => {
        let len = 0
        state.tags.map((item,) => {
            len = item.length + len + 1
        })
        len = len + e.target.value.length;
        setState((prevState => ({ ...prevState, keywordlen: len })))
        if (len < 100) { setState((prevState => ({ ...prevState, inputValue: e.target.value }))); }


    };

    const handleInputConfirm = (event) => {
        const { inputValue } = state;
        let { tags } = state;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        setState((prevState => ({ ...prevState, tags: tags, inputVisible: false, inputValue: '' })));
      
        props.parentCallback(tags);
        event.preventDefault();
    };
    const handleEditInputConfirm = () => {

        setState(({ tags, editInputIndex, editInputValue }) => {
            const newTags = [...tags];
            newTags[editInputIndex] = editInputValue;

            return {
                tags: newTags,
                editInputIndex: -1,
                editInputValue: '',
            };
        });
    };
    const handleEditInputChange = e => {
        setState((prevState => ({ ...prevState, editInputValue: e.target.value })));
    };
    
   
    useEffect(() => {
        let len = 0
        state.tags.map((item,) => {
            len = item.length + len + 1
        })

        setState((prevState => ({ ...prevState, keywordlen: len })))
    }, [])
    return (<css.TagWrapper>
        <div className="parent-tag-div">
            {state.tags.map((tag, index) => {
                if (state.editInputIndex === index) {
                    return (
                        <Input
                            key={tag}
                            size="small"
                            className="tag-input"
                            value={state.editInputValue}
                            onChange={handleEditInputChange}
                            onBlur={handleEditInputConfirm}
                            onPressEnter={handleEditInputConfirm}
                        />
                    );
                }

                const isLongTag = tag.length > 20;

                const tagElem = (
                    <Tag
                        className="edit-tag"
                        key={tag}
                        closable
                        onClose={() => handleClose(tag)}
                    >
                        <span>
                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                        </span>
                    </Tag>
                );
                return isLongTag ? (
                    <Tooltip title={tag} key={tag}>
                        {tagElem}
                    </Tooltip>
                ) : (
                    tagElem
                );
            })}
            <br />
            <br />
            <br />
        </div>
        <div className="input-div">
            {state.inputVisible && (
                < >
                    <Input

                        type="text"
                        size="small"
                        autoFocus
                        className="tag-input"
                        value={state.inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputConfirm}
                        onPressEnter={handleInputConfirm}
                    />

                </>
            )}

            {!state.inputVisible && (

                <Tag className="site-tag-plus" onClick={showInput} style={{ display: state.keywordlen >= 100 ? 'none' : '',cursor:'pointer' }}>
                    <PlusOutlined /> New Keyword
                </Tag>
            )}
        </div>
        <p style={{ float: "right", color: "lightslategray" }}>{state.keywordlen} / 100</p>
    </css.TagWrapper>);

}

