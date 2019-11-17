package de.javaansehz.backend;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.javaansehz.backend.endpoint.BackendRestController;
import de.javaansehz.backend.endpoint.LocalDateControllerAdvice;
import de.javaansehz.backend.endpoint.errorhandling.ValidationResultErrorHandler;
import de.javaansehz.backend.operation.PricingOperation;
import de.javaansehz.backend.persistance.BackendRepository;
import de.javaansehz.backend.persistance.CountryDto;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doReturn;

@WebMvcTest(controllers = {BackendRestController.class})
@ContextConfiguration(classes = {
        ValidationResultErrorHandler.class,
        LocalDateControllerAdvice.class,
})
public class MvcContextSpringbootTest {

    @Autowired
    protected MockMvc mockMvc;

    @MockBean
    protected PricingOperation mockPricingOpertaion;

    @MockBean
    protected BackendRepository backendRepository;

    @Autowired
    protected ObjectMapper objectMapper;

    @BeforeEach
    public void setup() {
        doReturn(100.0).when(mockPricingOpertaion).calculatePremium(any());
        doReturn(List.of(new CountryDto("Deutschland"))).when(backendRepository).findAll();
    }

}