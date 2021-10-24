package com.days.momentb.personalboard.repository;

import com.days.momentb.personalboard.dto.PersonalBoardDTO;
import com.days.momentb.personalboard.entity.PersonalBoard;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.ui.Model;

import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@SpringBootTest
@Log4j2
public class PersonalBoardRepositoryTests {


    @Autowired
    private PersonalBoardRepository personalBoardRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Test
    public void testInsert(){
        IntStream.rangeClosed(1,100).forEach(i->{

            Set<String> tags = IntStream.rangeClosed(1,3).mapToObj(j->i+"_tag"+j).collect(Collectors.toSet());

        PersonalBoard personalBoard = PersonalBoard.builder()
                .pbContent("sample....."+i)
                .memId("user"+i)
                .tags(tags)
                .build();

        personalBoardRepository.save(personalBoard);

        });



    }

    @Test
    public void testSearch1(){
        char[] typeArr=null;
        String keyword=null;
        Pageable pageable = PageRequest.of(0,10, Sort.by("pbNo").descending());
        Page<PersonalBoard> result = personalBoardRepository.search1(typeArr, keyword, pageable);

        result.get().forEach(personalBoard ->
        {
            log.info(personalBoard);
            log.info("-----");

            PersonalBoardDTO personalBoardDTO = modelMapper.map(personalBoard, PersonalBoardDTO.class);

          log.info(personalBoardDTO);

        });

    }

}
